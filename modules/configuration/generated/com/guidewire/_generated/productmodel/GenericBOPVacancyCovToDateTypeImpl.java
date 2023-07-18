package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPVacancyCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBOPVacancyCovToDateTypeImpl extends com.guidewire.pc.api.domain.covterm.DateTimeCovTermInternal implements productmodel.GenericBOPVacancyCovToDateType {
  public GenericBOPVacancyCovToDateTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPVacancyCov getBOPVacancyCov() {
    return (productmodel.BOPVacancyCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPVacancyCov getCoverage() {
    return (productmodel.BOPVacancyCov)getClause();
  }
  
  
}