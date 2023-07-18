package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredCollisionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBAHiredCollDeductTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBAHiredCollDeductType> implements productmodel.OptionBAHiredCollDeductType {
  public OptionBAHiredCollDeductTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAHiredCollisionCov getBAHiredCollisionCov() {
    return (productmodel.BAHiredCollisionCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAHiredCollisionCov getCoverage() {
    return (productmodel.BAHiredCollisionCov)getClause();
  }
  
  
}