package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageBAOwnedLiabilityLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageBAOwnedLiabilityLimitType> implements productmodel.PackageBAOwnedLiabilityLimitType {
  public PackageBAOwnedLiabilityLimitTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAOwnedLiabilityCov getBAOwnedLiabilityCov() {
    return (productmodel.BAOwnedLiabilityCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAOwnedLiabilityCov getCoverage() {
    return (productmodel.BAOwnedLiabilityCov)getClause();
  }
  
  
}