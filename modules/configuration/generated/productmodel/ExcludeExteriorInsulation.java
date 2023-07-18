package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeExteriorInsulation.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeExteriorInsulation extends entity.GeneralLiabilityExcl {
  protected ExcludeExteriorInsulation()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeExteriorInsulation(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeExteriorInsulation");
  }
  
  public ExcludeExteriorInsulation(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeExteriorInsulation");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeExteriorInsulationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeExteriorInsulation>() {
      public productmodel.ExcludeExteriorInsulation newEmptyInstance() {
        return new productmodel.ExcludeExteriorInsulation();
      }
      
      
    });
  }
}