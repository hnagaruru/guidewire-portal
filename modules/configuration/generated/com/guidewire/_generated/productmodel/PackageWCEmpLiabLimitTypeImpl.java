package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCEmpLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageWCEmpLiabLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageWCEmpLiabLimitType> implements productmodel.PackageWCEmpLiabLimitType {
  public PackageWCEmpLiabLimitTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.WCEmpLiabCov getCoverage() {
    return (productmodel.WCEmpLiabCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.WCEmpLiabCov getWCEmpLiabCov() {
    return (productmodel.WCEmpLiabCov)getClause();
  }
  
  
}