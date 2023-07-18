package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PALiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackagePALiabilityTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackagePALiabilityType> implements productmodel.PackagePALiabilityType {
  public PackagePALiabilityTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PALiabilityCov getCoverage() {
    return (productmodel.PALiabilityCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PALiabilityCov getPALiabilityCov() {
    return (productmodel.PALiabilityCov)getClause();
  }
  
  
}