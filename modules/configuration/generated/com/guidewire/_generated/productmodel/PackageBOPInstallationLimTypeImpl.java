package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPToolsInstallUnschedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageBOPInstallationLimTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageBOPInstallationLimType> implements productmodel.PackageBOPInstallationLimType {
  public PackageBOPInstallationLimTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
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