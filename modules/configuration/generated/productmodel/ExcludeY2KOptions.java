package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeY2KOptions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeY2KOptions extends entity.GeneralLiabilityExcl {
  protected ExcludeY2KOptions()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeY2KOptions(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeY2KOptions");
  }
  
  public ExcludeY2KOptions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeY2KOptions");
  }
  
  public productmodel.TypekeyExcludeY2KExposureTypeType getExcludeY2KExposureTypeTerm() {
    return (productmodel.TypekeyExcludeY2KExposureTypeType)getCovTerm("ExcludeY2KExposureType");
  }
  
  public boolean getHasExcludeY2KExposureTypeTerm() {
    return hasCovTerm("ExcludeY2KExposureType");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeY2KOptionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeY2KOptions>() {
      public productmodel.ExcludeY2KOptions newEmptyInstance() {
        return new productmodel.ExcludeY2KOptions();
      }
      
      
    });
  }
}