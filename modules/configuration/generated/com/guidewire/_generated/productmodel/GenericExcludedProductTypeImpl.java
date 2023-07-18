package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeProducts.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericExcludedProductTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericExcludedProductType {
  public GenericExcludedProductTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExcludeProducts getExcludeProducts() {
    return (productmodel.ExcludeProducts)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExcludeProducts getExclusion() {
    return (productmodel.ExcludeProducts)getClause();
  }
  
  
}