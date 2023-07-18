package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPGolfCartItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectHOPGolfCartItemLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectHOPGolfCartItemLimitType {
  public DirectHOPGolfCartItemLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPGolfCartItem getCoverage() {
    return (productmodel.HOPGolfCartItem)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPGolfCartItem getHOPGolfCartItem() {
    return (productmodel.HOPGolfCartItem)getClause();
  }
  
  
}