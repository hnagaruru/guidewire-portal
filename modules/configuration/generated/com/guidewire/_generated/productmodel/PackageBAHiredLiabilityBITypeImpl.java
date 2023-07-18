package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageBAHiredLiabilityBITypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageBAHiredLiabilityBIType> implements productmodel.PackageBAHiredLiabilityBIType {
  public PackageBAHiredLiabilityBITypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAHiredLiabilityCov getBAHiredLiabilityCov() {
    return (productmodel.BAHiredLiabilityCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAHiredLiabilityCov getCoverage() {
    return (productmodel.BAHiredLiabilityCov)getClause();
  }
  
  
}