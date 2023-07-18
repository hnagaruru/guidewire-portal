package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPFuneralDirCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPFuneralDirNumTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPFuneralDirNumType {
  public DirectBOPFuneralDirNumTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPFuneralDirCov getBOPFuneralDirCov() {
    return (productmodel.BOPFuneralDirCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPFuneralDirCov getCoverage() {
    return (productmodel.BOPFuneralDirCov)getClause();
  }
  
  
}