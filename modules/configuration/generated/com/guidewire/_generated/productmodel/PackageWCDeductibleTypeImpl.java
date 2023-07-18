package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCWorkCompDeductCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageWCDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageWCDeductibleType> implements productmodel.PackageWCDeductibleType {
  public PackageWCDeductibleTypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.WCWorkCompDeductCov getCoverage() {
    return (productmodel.WCWorkCompDeductCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.WCWorkCompDeductCov getWCWorkCompDeductCov() {
    return (productmodel.WCWorkCompDeductCov)getClause();
  }
  
  
}