package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAComprehensiveCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBAZeroGlassTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericBAZeroGlassType {
  public GenericBAZeroGlassTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAComprehensiveCov getBAComprehensiveCov() {
    return (productmodel.BAComprehensiveCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAComprehensiveCov getCoverage() {
    return (productmodel.BAComprehensiveCov)getClause();
  }
  
  
}