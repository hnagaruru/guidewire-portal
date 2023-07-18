package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BACollisionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBACollisionDeductTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBACollisionDeductType> implements productmodel.OptionBACollisionDeductType {
  public OptionBACollisionDeductTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BACollisionCov getBACollisionCov() {
    return (productmodel.BACollisionCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BACollisionCov getCoverage() {
    return (productmodel.BACollisionCov)getClause();
  }
  
  
}