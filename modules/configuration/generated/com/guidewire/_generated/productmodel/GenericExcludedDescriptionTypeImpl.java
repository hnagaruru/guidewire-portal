package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeY2KDesignated.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericExcludedDescriptionTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericExcludedDescriptionType {
  public GenericExcludedDescriptionTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExcludeY2KDesignated getExcludeY2KDesignated() {
    return (productmodel.ExcludeY2KDesignated)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExcludeY2KDesignated getExclusion() {
    return (productmodel.ExcludeY2KDesignated)getClause();
  }
  
  
}