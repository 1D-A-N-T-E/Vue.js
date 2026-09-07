import express from 'express';
import db from './admin.db.js';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.get('/users', async (_req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM admin ORDER BY created_at DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Kļūda, iegūstot lietotājus:', error);
    res.status(500).json({ success: false, message: 'Servera kļūda' });
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM admin WHERE id = ?', [req.params.id]); //atgriež masīvu

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Lietotājs nav atrasts' });
    }

    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Kļūda, iegūstot lietotāju:', error);
    res.status(500).json({ success: false, message: 'Servera kļūda' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM admin WHERE id = ?', [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Lietotājs nav atrasts' });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Kļūda, dzēšot lietotāju:', error);
    res.status(500).json({ success: false, message: 'Servera kļūda' });
  }
});

router.post('/login', async(req, res)=>{
  try{
    const {email, password}= req.body;
    const [rows]= await db.query('SELECT * FROM admin WHERE email = ? AND password = ?',[email, password]);
   if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Administrātors nav atrasts' });
    }
    
    const admin = rows[0];

    const token = jwt.sign(
    { id: admin.id, email: admin.email  },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  res.json({ token });
    
    
  } catch (error) {
    console.error('Kļūda, iegūstot lietotāju:', error);
    res.status(500).json({ success: false, message: 'Servera kļūda' });
  }
})
export default router;
