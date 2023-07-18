package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigWrapUpOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericExcludedWrapUpOpsTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericExcludedWrapUpOpsType {
  public GenericExcludedWrapUpOpsTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigWrapUpOps getExcludeDesigWrapUpOps() {
    return (productmodel.ExcludeDesigWrapUpOps)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigWrapUpOps getExclusion() {
    return (productmodel.ExcludeDesigWrapUpOps)getClause();
  }
  
  
}