package com.ana.test.service.user.impl;

import com.ana.test.bean.RendezVous;
import com.ana.test.service.user.facade.RendezVousService;
import com.ana.test.dao.RendezVousDao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class RendezVousServiceImpl implements RendezVousService {


    @Autowired
    private RendezVousDao rendezVousDao;
     @Override
        public RendezVous findByNom(String reference) {
       return rendezVousDao.findByNom(reference);
       }

    @Override
    @Transactional
     public int deleteByNom(String reference) {
       rendezVousDao.deleteByNom(reference);
       return 1; 
       }

      @Override
    public List<RendezVous> findAll() {
        return rendezVousDao.findAll();
    }


    @Override
    public Page<RendezVous> paginate(int page, int size) {
        return rendezVousDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public RendezVous findById(Long id) {
        return rendezVousDao.findById(id).orElse(null);
    }

    @Override
    public RendezVous findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        rendezVousDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<RendezVous>> getToBeSavedAndToBeDeleted(List<RendezVous> oldList, List<RendezVous> newList) {
        return null;
    }

    @Override
    public RendezVous save(RendezVous entity) {
        return rendezVousDao.save(entity);
    }

    @Override
    public List<RendezVous> save(List<RendezVous> list) {
        return null;
    }

    @Override
    public RendezVous update(RendezVous entity) {
        return rendezVousDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(RendezVous entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<RendezVous> list) {

    }

    @Override
    public void update(List<RendezVous> list) {

           }
}
