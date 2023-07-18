package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCUninsuredCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageBADOCUninsuredBITypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageBADOCUninsuredBIType> implements productmodel.PackageBADOCUninsuredBIType {
  public PackageBADOCUninsuredBITypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BADOCUninsuredCov getBADOCUninsuredCov() {
    return (productmodel.BADOCUninsuredCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BADOCUninsuredCov getCoverage() {
    return (productmodel.BADOCUninsuredCov)getClause();
  }
  
  
}