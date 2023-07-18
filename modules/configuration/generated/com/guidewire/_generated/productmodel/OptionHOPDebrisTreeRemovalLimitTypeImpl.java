package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPDebrisTreeRemoval.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPDebrisTreeRemovalLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPDebrisTreeRemovalLimitType> implements productmodel.OptionHOPDebrisTreeRemovalLimitType {
  public OptionHOPDebrisTreeRemovalLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPDebrisTreeRemoval getCoverage() {
    return (productmodel.HOPDebrisTreeRemoval)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPDebrisTreeRemoval getHOPDebrisTreeRemoval() {
    return (productmodel.HOPDebrisTreeRemoval)getClause();
  }
  
  
}