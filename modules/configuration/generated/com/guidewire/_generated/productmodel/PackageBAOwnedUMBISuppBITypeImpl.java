package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedUMBISuppCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackageBAOwnedUMBISuppBITypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackageBAOwnedUMBISuppBIType> implements productmodel.PackageBAOwnedUMBISuppBIType {
  public PackageBAOwnedUMBISuppBITypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAOwnedUMBISuppCov getBAOwnedUMBISuppCov() {
    return (productmodel.BAOwnedUMBISuppCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAOwnedUMBISuppCov getCoverage() {
    return (productmodel.BAOwnedUMBISuppCov)getClause();
  }
  
  
}