package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPPersonalPropertyOffPremises.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPPersonalPropertyOffPremisesLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPPersonalPropertyOffPremisesLimitType> implements productmodel.OptionHOPPersonalPropertyOffPremisesLimitType {
  public OptionHOPPersonalPropertyOffPremisesLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPPersonalPropertyOffPremises getCoverage() {
    return (productmodel.HOPPersonalPropertyOffPremises)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPPersonalPropertyOffPremises getHOPPersonalPropertyOffPremises() {
    return (productmodel.HOPPersonalPropertyOffPremises)getClause();
  }
  
  
}