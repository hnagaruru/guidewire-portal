package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAPropProtectionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBAPropProtectLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBAPropProtectLimitType> implements productmodel.OptionBAPropProtectLimitType {
  public OptionBAPropProtectLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAPropProtectionCov getBAPropProtectionCov() {
    return (productmodel.BAPropProtectionCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAPropProtectionCov getCoverage() {
    return (productmodel.BAPropProtectionCov)getClause();
  }
  
  
}