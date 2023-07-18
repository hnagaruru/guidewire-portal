package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PARentalCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackagePARentalTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackagePARentalType> implements productmodel.PackagePARentalType {
  public PackagePARentalTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PARentalCov getCoverage() {
    return (productmodel.PARentalCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PARentalCov getPARentalCov() {
    return (productmodel.PARentalCov)getClause();
  }
  
  
}