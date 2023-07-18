package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageBADOCLiabilityLiabTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageBADOCLiabilityLiabType> implements productmodel.PackageBADOCLiabilityLiabType {
  public PackageBADOCLiabilityLiabTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BADOCLiabilityCov getBADOCLiabilityCov() {
    return (productmodel.BADOCLiabilityCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BADOCLiabilityCov getCoverage() {
    return (productmodel.BADOCLiabilityCov)getClause();
  }
  
  
}