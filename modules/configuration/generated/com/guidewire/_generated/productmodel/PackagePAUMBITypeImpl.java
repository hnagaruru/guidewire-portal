package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAUMBICov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackagePAUMBITypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackagePAUMBIType> implements productmodel.PackagePAUMBIType {
  public PackagePAUMBITypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAUMBICov getCoverage() {
    return (productmodel.PAUMBICov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAUMBICov getPAUMBICov() {
    return (productmodel.PAUMBICov)getClause();
  }
  
  
}