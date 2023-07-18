package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PADeathDisabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionDeathBenefitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionDeathBenefitType> implements productmodel.OptionDeathBenefitType {
  public OptionDeathBenefitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PADeathDisabilityCov getCoverage() {
    return (productmodel.PADeathDisabilityCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PADeathDisabilityCov getPADeathDisabilityCov() {
    return (productmodel.PADeathDisabilityCov)getClause();
  }
  
  
}