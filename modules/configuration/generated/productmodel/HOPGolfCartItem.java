package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPGolfCartItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPGolfCartItem extends entity.HOPDwellSchCovItemCov {
  protected HOPGolfCartItem()  {
    super((java.lang.Void)null);
  }
  
  public HOPGolfCartItem(entity.PolicyPeriod branch)  {
    super(branch, "zdogeskkpv01dc9p8upk23dne09");
  }
  
  public HOPGolfCartItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zdogeskkpv01dc9p8upk23dne09");
  }
  
  public productmodel.GenericHOPGolfCartItemIncludeCollisionType getHOPGolfCartItemIncludeCollisionTerm() {
    return (productmodel.GenericHOPGolfCartItemIncludeCollisionType)getCovTerm("zetg68o4lcajf1nt9frdn77ogmb");
  }
  
  public productmodel.DirectHOPGolfCartItemLimitType getHOPGolfCartItemLimitTerm() {
    return (productmodel.DirectHOPGolfCartItemLimitType)getCovTerm("z0pjsih9gkurgbh648e992svj88");
  }
  
  public boolean getHasHOPGolfCartItemIncludeCollisionTerm() {
    return hasCovTerm("zetg68o4lcajf1nt9frdn77ogmb");
  }
  
  public boolean getHasHOPGolfCartItemLimitTerm() {
    return hasCovTerm("z0pjsih9gkurgbh648e992svj88");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPGolfCartItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPGolfCartItem>() {
      public productmodel.HOPGolfCartItem newEmptyInstance() {
        return new productmodel.HOPGolfCartItem();
      }
      
      
    });
  }
}