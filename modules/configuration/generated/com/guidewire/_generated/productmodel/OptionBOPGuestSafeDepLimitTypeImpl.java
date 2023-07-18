package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPGuestSafeDepCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPGuestSafeDepLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPGuestSafeDepLimitType> implements productmodel.OptionBOPGuestSafeDepLimitType {
  public OptionBOPGuestSafeDepLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPGuestSafeDepCov getBOPGuestSafeDepCov() {
    return (productmodel.BOPGuestSafeDepCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPGuestSafeDepCov getCoverage() {
    return (productmodel.BOPGuestSafeDepCov)getClause();
  }
  
  
}