package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedUMBICov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBAOwnedUMStackUIMTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericBAOwnedUMStackUIMType {
  public GenericBAOwnedUMStackUIMTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAOwnedUMBICov getBAOwnedUMBICov() {
    return (productmodel.BAOwnedUMBICov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAOwnedUMBICov getCoverage() {
    return (productmodel.BAOwnedUMBICov)getClause();
  }
  
  
}