package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageBOPLiabilityTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageBOPLiabilityType> implements productmodel.PackageBOPLiabilityType {
  public PackageBOPLiabilityTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPLiabilityCov getBOPLiabilityCov() {
    return (productmodel.BOPLiabilityCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPLiabilityCov getCoverage() {
    return (productmodel.BOPLiabilityCov)getClause();
  }
  
  
}