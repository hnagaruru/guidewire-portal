package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BANonownedLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageBANonownedLiabBITypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageBANonownedLiabBIType> implements productmodel.PackageBANonownedLiabBIType {
  public PackageBANonownedLiabBITypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BANonownedLiabCov getBANonownedLiabCov() {
    return (productmodel.BANonownedLiabCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BANonownedLiabCov getCoverage() {
    return (productmodel.BANonownedLiabCov)getClause();
  }
  
  
}