package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPGolfCart.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPGolfCart extends entity.HOPDwellingScheduleCov {
  protected HOPGolfCart()  {
    super((java.lang.Void)null);
  }
  
  public HOPGolfCart(entity.PolicyPeriod branch)  {
    super(branch, "z39i08pn1407l7i6bv5j2jk2jhb");
  }
  
  public HOPGolfCart(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z39i08pn1407l7i6bv5j2jk2jhb");
  }
  
  public productmodel.ScheduledItemHOPGolfCartSched createAndAddScheduledItemHOPGolfCartSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPGolfCartSchedImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPGolfCartSched> getScheduledItemHOPGolfCartSchedList() {
    java.util.List<productmodel.ScheduledItemHOPGolfCartSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPGolfCartSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPGolfCartSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPGolfCartSched(productmodel.ScheduledItemHOPGolfCartSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPGolfCartInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPGolfCart>() {
      public productmodel.HOPGolfCart newEmptyInstance() {
        return new productmodel.HOPGolfCart();
      }
      
      
    });
  }
}