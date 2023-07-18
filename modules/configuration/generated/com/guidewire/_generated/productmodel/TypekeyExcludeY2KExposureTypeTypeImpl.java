package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeY2KOptions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyExcludeY2KExposureTypeTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.Y2KExclusionType> implements productmodel.TypekeyExcludeY2KExposureTypeType {
  public TypekeyExcludeY2KExposureTypeTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExcludeY2KOptions getExcludeY2KOptions() {
    return (productmodel.ExcludeY2KOptions)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExcludeY2KOptions getExclusion() {
    return (productmodel.ExcludeY2KOptions)getClause();
  }
  
  
}