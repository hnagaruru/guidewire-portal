package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPDamagePropOthers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPDamagePropOthers extends entity.HOPLineCov {
  protected HOPDamagePropOthers()  {
    super((java.lang.Void)null);
  }
  
  public HOPDamagePropOthers(entity.PolicyPeriod branch)  {
    super(branch, "zmpji3fssm9h5emk8uqv9nl6sb8");
  }
  
  public HOPDamagePropOthers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zmpji3fssm9h5emk8uqv9nl6sb8");
  }
  
  public productmodel.OptionHOPDamagePropOthersLimitType getHOPDamagePropOthersLimitTerm() {
    return (productmodel.OptionHOPDamagePropOthersLimitType)getCovTerm("ztnh6llp5fe5j2m58qnu7nc5fab");
  }
  
  public boolean getHasHOPDamagePropOthersLimitTerm() {
    return hasCovTerm("ztnh6llp5fe5j2m58qnu7nc5fab");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPDamagePropOthersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPDamagePropOthers>() {
      public productmodel.HOPDamagePropOthers newEmptyInstance() {
        return new productmodel.HOPDamagePropOthers();
      }
      
      
    });
  }
}