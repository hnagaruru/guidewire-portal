package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPVetCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPVetNumTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPVetNumType {
  public DirectBOPVetNumTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPVetCov getBOPVetCov() {
    return (productmodel.BOPVetCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPVetCov getCoverage() {
    return (productmodel.BOPVetCov)getClause();
  }
  
  
}