package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BARentalCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageBARentalTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageBARentalType> implements productmodel.PackageBARentalType {
  public PackageBARentalTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BARentalCov getBARentalCov() {
    return (productmodel.BARentalCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BARentalCov getCoverage() {
    return (productmodel.BARentalCov)getClause();
  }
  
  
}