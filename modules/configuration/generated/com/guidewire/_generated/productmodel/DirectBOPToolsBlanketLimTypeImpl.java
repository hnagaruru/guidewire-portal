package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPToolsInstallUnschedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPToolsBlanketLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPToolsBlanketLimType {
  public DirectBOPToolsBlanketLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPToolsInstallUnschedCov getBOPToolsInstallUnschedCov() {
    return (productmodel.BOPToolsInstallUnschedCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPToolsInstallUnschedCov getCoverage() {
    return (productmodel.BOPToolsInstallUnschedCov)getClause();
  }
  
  
}