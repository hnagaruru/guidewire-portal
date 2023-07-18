package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCCollisionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBADOCCollisionDeductTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBADOCCollisionDeductType> implements productmodel.OptionBADOCCollisionDeductType {
  public OptionBADOCCollisionDeductTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BADOCCollisionCov getBADOCCollisionCov() {
    return (productmodel.BADOCCollisionCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BADOCCollisionCov getCoverage() {
    return (productmodel.BADOCCollisionCov)getClause();
  }
  
  
}