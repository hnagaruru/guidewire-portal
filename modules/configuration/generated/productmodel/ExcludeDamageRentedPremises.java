package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDamageRentedPremises.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeDamageRentedPremises extends entity.GeneralLiabilityExcl {
  protected ExcludeDamageRentedPremises()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeDamageRentedPremises(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeDamageRentedPremises");
  }
  
  public ExcludeDamageRentedPremises(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeDamageRentedPremises");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeDamageRentedPremisesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeDamageRentedPremises>() {
      public productmodel.ExcludeDamageRentedPremises newEmptyInstance() {
        return new productmodel.ExcludeDamageRentedPremises();
      }
      
      
    });
  }
}