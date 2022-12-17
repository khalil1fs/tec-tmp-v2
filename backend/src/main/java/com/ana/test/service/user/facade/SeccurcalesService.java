package com.ana.test.service.user.facade;

import com.ana.test.bean.Seccurcales;
import com.ana.test.service.core.facade.AbstractService;

public interface SeccurcalesService extends AbstractService<Seccurcales, Long> {

   Seccurcales findByLibelle(String reference);
   int deleteByLibelle(String ref);

}
