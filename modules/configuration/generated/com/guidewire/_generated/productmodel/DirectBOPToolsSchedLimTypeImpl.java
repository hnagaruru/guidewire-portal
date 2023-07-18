package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPToolsSchedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPToolsSchedLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPToolsSchedLimType {
  public DirectBOPToolsSchedLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPToolsSchedCov getBOPToolsSchedCov() {
    return (productmodel.BOPToolsSchedCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPToolsSchedCov getCoverage() {
    return (productmodel.BOPToolsSchedCov)getClause();
  }
  
  
}