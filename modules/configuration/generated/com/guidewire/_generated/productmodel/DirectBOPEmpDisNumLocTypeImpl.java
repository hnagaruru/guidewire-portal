package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEmpDisCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPEmpDisNumLocTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPEmpDisNumLocType {
  public DirectBOPEmpDisNumLocTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPEmpDisCov getBOPEmpDisCov() {
    return (productmodel.BOPEmpDisCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPEmpDisCov getCoverage() {
    return (productmodel.BOPEmpDisCov)getClause();
  }
  
  
}