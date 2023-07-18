package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPropProtectionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPropProtectLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPropProtectLimitType> implements productmodel.OptionPAPropProtectLimitType {
  public OptionPAPropProtectLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPropProtectionCov getCoverage() {
    return (productmodel.PAPropProtectionCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPropProtectionCov getPAPropProtectionCov() {
    return (productmodel.PAPropProtectionCov)getClause();
  }
  
  
}