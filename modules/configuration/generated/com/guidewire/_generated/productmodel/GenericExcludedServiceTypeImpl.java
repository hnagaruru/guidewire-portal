package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigProfService.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericExcludedServiceTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericExcludedServiceType {
  public GenericExcludedServiceTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigProfService getExcludeDesigProfService() {
    return (productmodel.ExcludeDesigProfService)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigProfService getExclusion() {
    return (productmodel.ExcludeDesigProfService)getClause();
  }
  
  
}