package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPOrdinanceOrLaw.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPOrdinanceOrLawLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPOrdinanceOrLawLimitType> implements productmodel.OptionHOPOrdinanceOrLawLimitType {
  public OptionHOPOrdinanceOrLawLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPOrdinanceOrLaw getCoverage() {
    return (productmodel.HOPOrdinanceOrLaw)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPOrdinanceOrLaw getHOPOrdinanceOrLaw() {
    return (productmodel.HOPOrdinanceOrLaw)getClause();
  }
  
  
}