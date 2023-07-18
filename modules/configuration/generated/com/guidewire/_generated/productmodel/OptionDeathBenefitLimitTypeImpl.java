package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CADeathDisabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionDeathBenefitLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionDeathBenefitLimitType> implements productmodel.OptionDeathBenefitLimitType {
  public OptionDeathBenefitLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CADeathDisabilityCov getCADeathDisabilityCov() {
    return (productmodel.CADeathDisabilityCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CADeathDisabilityCov getCoverage() {
    return (productmodel.CADeathDisabilityCov)getClause();
  }
  
  
}