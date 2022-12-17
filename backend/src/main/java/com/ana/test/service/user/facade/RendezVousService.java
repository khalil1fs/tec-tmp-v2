package com.ana.test.service.user.facade;

import com.ana.test.bean.RendezVous;
import com.ana.test.service.core.facade.AbstractService;

public interface RendezVousService extends AbstractService<RendezVous, Long> {

   RendezVous findByNom(String reference);
   int deleteByNom(String ref);

}
