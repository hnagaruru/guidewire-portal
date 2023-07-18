package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPGuestPropCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPGuestPropCov extends entity.BusinessOwnersCov {
  protected BOPGuestPropCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPGuestPropCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPGuestPropCov");
  }
  
  public BOPGuestPropCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPGuestPropCov");
  }
  
  public productmodel.OptionGuestPropClaimLimType getGuestPropClaimLimTerm() {
    return (productmodel.OptionGuestPropClaimLimType)getCovTerm("GuestPropClaimLim");
  }
  
  public productmodel.OptionGuestPropOccLimType getGuestPropOccLimTerm() {
    return (productmodel.OptionGuestPropOccLimType)getCovTerm("GuestPropOccLim");
  }
  
  public boolean getHasGuestPropClaimLimTerm() {
    return hasCovTerm("GuestPropClaimLim");
  }
  
  public boolean getHasGuestPropOccLimTerm() {
    return hasCovTerm("GuestPropOccLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPGuestPropCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPGuestPropCov>() {
      public productmodel.BOPGuestPropCov newEmptyInstance() {
        return new productmodel.BOPGuestPropCov();
      }
      
      
    });
  }
}