package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigWork.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericExcludedWorkTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericExcludedWorkType {
  public GenericExcludedWorkTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigWork getExcludeDesigWork() {
    return (productmodel.ExcludeDesigWork)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigWork getExclusion() {
    return (productmodel.ExcludeDesigWork)getClause();
  }
  
  
}