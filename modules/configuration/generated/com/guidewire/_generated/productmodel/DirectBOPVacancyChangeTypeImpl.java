package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPVacancyChangeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPVacancyChangeTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPVacancyChangeType {
  public DirectBOPVacancyChangeTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPVacancyChangeCov getBOPVacancyChangeCov() {
    return (productmodel.BOPVacancyChangeCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPVacancyChangeCov getCoverage() {
    return (productmodel.BOPVacancyChangeCov)getClause();
  }
  
  
}