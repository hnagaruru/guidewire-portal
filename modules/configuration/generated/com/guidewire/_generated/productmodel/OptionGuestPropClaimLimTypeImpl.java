package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPGuestPropCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGuestPropClaimLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGuestPropClaimLimType> implements productmodel.OptionGuestPropClaimLimType {
  public OptionGuestPropClaimLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPGuestPropCov getBOPGuestPropCov() {
    return (productmodel.BOPGuestPropCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPGuestPropCov getCoverage() {
    return (productmodel.BOPGuestPropCov)getClause();
  }
  
  
}